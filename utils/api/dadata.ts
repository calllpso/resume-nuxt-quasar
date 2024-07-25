export class Dadata {
  private token = null
  private headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: null,
  }
  constructor() {
    this.token = useTokenStore().dadata
    this.headers.Authorization = this.token
  }

  public POST = {
    location: async (searchStr: string) => {
      {
        let result: Dadata.DadataResponse<Dadata.Address> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({ query: searchStr }),
        })
        return result.suggestions.map((suggestion: Dadata.Suggestion<Dadata.Address>) =>
          suggestion.value,
        );
      }
    },
    city: async (searchStr: string) => {
      let result: Dadata.DadataResponse<Dadata.Address> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query: searchStr,
          from_bound: { value: "city" },
          to_bound: { value: "settlement" }
        }),
      })
      return result.suggestions.map((suggestion: Dadata.Suggestion<Dadata.Address>) =>
        !!suggestion.data.city ? suggestion.data.city_with_type : suggestion.data.settlement_with_type
        ,
      );
    },
    organization: async (searchStr: string) => {
      let result: Dadata.DadataResponse<Dadata.Party> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query: searchStr,
          from_bound: { value: "city" },
          to_bound: { value: "settlement" }
        }),
      })
      return result.suggestions.map((suggestion: Dadata.Suggestion<Dadata.Party>) =>
        suggestion.value
      );
    }

  }

}
