import * as _regex from './regex/regex';
import * as _Dadata from './api/dadata';
import * as _candidate from './filling/candidate';

namespace regex { export import phone = _regex.phone }
namespace api { export import Dadata = _Dadata.Dadata }
namespace fill { export import candidate = _candidate }

export { regex, api, fill }