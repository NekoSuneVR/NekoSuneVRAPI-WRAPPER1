
declare class NEKOSUNEAPI {
  trovo():Promise<NEKOSUNEAPI.QueryParams>;
  twitch():Promise<NEKOSUNEAPI.QueryParams>;
  vimm():Promise<NEKOSUNEAPI.QueryParams>;
  kick():Promise<NEKOSUNEAPI.QueryParams>;
  dlive():Promise<NEKOSUNEAPI.QueryParams>;
}


export = NEKOSUNEAPI;



declare namespace NEKOSUNEAPI {

  export interface QueryParams {

    text: string;

  }

  export interface NekoChatResults {

    response: string;

    url?: string;

  }

}