/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Filter, TermVector } from '@global/termvectors/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Field,
  Fields,
  Id,
  IndexName,
  Routing,
  VersionNumber,
  VersionType
} from '@_types/common'
import { long } from '@_types/Numeric'

export class Operation {
  doc: UserDefinedValue
  fields: Fields
  field_statistics: boolean
  filter: Filter
  _id: Id
  _index: IndexName
  offsets: boolean
  payloads: boolean
  positions: boolean
  routing: Routing
  term_statistics: boolean
  version: VersionNumber
  version_type: VersionType
}

export class TermVectorsResult {
  found: boolean
  id: Id
  index: IndexName
  term_vectors: Dictionary<Field, TermVector>
  took: long
  version: VersionNumber
}
