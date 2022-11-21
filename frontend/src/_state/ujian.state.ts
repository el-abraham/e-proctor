import { atom } from "recoil";
import { QuizInstanceRes } from "../_api/quiz";



const ujianListState = atom<QuizInstanceRes[]>({
  key: "UjianListState",
  default: []
})


const detailUjianState = atom<QuizInstanceRes | undefined>({
  key: "DetailUjianState",
  default: undefined
})


export { ujianListState, detailUjianState }