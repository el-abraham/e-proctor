import { api, IResponse } from "./config"

type QuizInstanceRes = {
  id: number,
  quiz_name: string,
  image?: string | undefined,
  description?: string | undefined,
  timestart: number,
  timeend: number,
  total_questions: number,
  proctor: {
    firstname: string,
    lastname?: string | undefined,
    picture?: string | undefined
  }
}

const getQuizInstance = async (token: string) => {
  try {
    const { data } = await api.get("/quiz/instance", {
      headers: {
        "x-access-tokens": token
      }
    })

    const response: IResponse<QuizInstanceRes[]> = data

    return response.data

  } catch (error) {

    console.log(error)
  }
}


export { getQuizInstance }
export type { QuizInstanceRes }
