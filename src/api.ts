import { getPreferenceValues } from "@raycast/api";
import axios from "axios";

export function codeGenerateApi(prompt: string) {
  const { language, apikey, apisecret } = getPreferenceValues();
  return axios({
    method: "post",
    url: "https://wudao.aminer.cn/os/api/api/v2/multilingual_code/generate",
    data: {
      lang: language,
      n: 1,
      prompt,
      apikey,
      apisecret,
    },
  });
}
export function codeExplainApi(prompt: string) {
  const { language, comment, apikey, apisecret } = getPreferenceValues();
  return axios({
    method: "post",
    url: "https://wudao.aminer.cn/os/api/api/v2/multilingual_code_explain",
    data: {
      n: 1,
      prompt,
      lang: language,
      locale: comment,
      apikey,
      apisecret,
    },
  });
}
export function codeExplainFormApi({ prompt, lang, locale }) {
  const { apikey, apisecret } = getPreferenceValues();
  return axios({
    method: "post",
    url: "https://wudao.aminer.cn/os/api/api/v2/multilingual_code_explain",
    data: {
      n: 1,
      prompt,
      lang,
      locale,
      apikey,
      apisecret,
    },
  });
}
export function codeTranslateApi(prompt: string) {
  const { language, targetLanguage, apikey, apisecret } = getPreferenceValues();
  const src_lang = language === "Javascript" ? "JavaScript" : language;
  return axios({
    method: "post",
    url: "https://wudao.aminer.cn/os/api/api/v2/multilingual_code/translate",
    data: {
      dst_lang: targetLanguage,
      n: 1,
      prompt,
      src_lang,
      stop: [],
      apikey,
      apisecret,
    },
  });
}
