import * as _regex from './regex/regex';
import * as _Dadata from './api/dadata';

namespace regex {
    export import phone = _regex.phone
}

namespace api {
    export import Dadata = _Dadata.Dadata
}

export { regex, api }