export class Dadata {
  private token = ''

  private headers: Headers = new Headers();
  constructor() {
    this.token = useTokenStore().dadata

    this.headers.set('Authorization', this.token)
    this.headers.set('Accept', 'application/json')
    this.headers.set('Content-Type', 'application/json')
  }

  public POST = {
    location: async (searchStr: string) => {
      {
        let result: types.Dadata.DadataResponse<types.Dadata.Address> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({ query: searchStr }),
        })
        return result.suggestions.map((suggestion: types.Dadata.Suggestion<types.Dadata.Address>) =>
          suggestion.value,
        );
      }
    },
    city: async (searchStr: string) => {
      let result: types.Dadata.DadataResponse<types.Dadata.Address> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query: searchStr,
          from_bound: { value: "city" },
          to_bound: { value: "settlement" }
        }),
      })
      return result.suggestions.map((suggestion: types.Dadata.Suggestion<types.Dadata.Address>) =>
        !!suggestion.data.city ? suggestion.data.city_with_type : suggestion.data.settlement_with_type
        ,
      );
    },
    organization: async (searchStr: string) => {
      let result: types.Dadata.DadataResponse<types.Dadata.Party> = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query: searchStr,
          from_bound: { value: "city" },
          to_bound: { value: "settlement" }
        }),
      })
      return result.suggestions.map((suggestion: types.Dadata.Suggestion<types.Dadata.Party>) =>
        suggestion.value
      );
    }

  }

}
