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

import { RoleMappingRule } from '@security/_types/RoleMappingRule'
import { RequestBase } from '@_types/Base'
import { Metadata, Name, Refresh } from '@_types/common'

/**
 * @rest_spec_name security.put_role_mapping
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    name: Name
  }
  query_parameters: {
    refresh?: Refresh
  }
  body: {
    enabled?: boolean
    metadata?: Metadata
    roles?: string[]
    rules?: RoleMappingRule
    run_as?: string[]
  }
}
