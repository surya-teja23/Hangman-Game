import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNewWord } from "../features/HangmanSlice";
import { AppDispatch } from "../app/store";

const useFetchNewWord = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNewWord());
  }, [dispatch]);
};

export default useFetchNewWord;
