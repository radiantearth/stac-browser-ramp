import axios from "axios";
import Utils from "../utils";

export class Loading {
  
  constructor(show = false, loadApi = false) {
    this.show = Boolean(show);
    this.loadApi = Boolean(loadApi);
  }

}

export async function stacRequest(cx, link) {
  let opts;
  if (Utils.isObject(link)) {
    let method = typeof link.method === 'string' ? link.method.toLowerCase() : 'get';
    opts = {
      method,
      url: cx.getters.getRequestUrl(link.href),
      headers: Object.assign({}, cx.state.requestHeaders, link.headers),
      data: link.body
      // ToDo: Support for merge property from STAC API
    };
  }
  else if (typeof link === 'string') {
    opts = {
      method: 'get',
      url: cx.getters.getRequestUrl(link),
      headers: cx.state.requestHeaders
    };
  }
  else {
    opts = link;
  }

  let response;
  try {
    response = await axios(opts);
  } catch (error) {
    if (error?.response?.status === 401) {
      let key = prompt('You don\'t have permission to view this page. Please provide your API Key:', '');
      if (key) {
        cx.commit('setApiKey', key);
        response = await stacRequest(cx, link);
      }
      else {
        throw error;
      }
    }
    else {
      throw error;
    }
  }

  return response;
}