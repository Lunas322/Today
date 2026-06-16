import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import React, { SetStateAction, useState } from "react";

type useDiaryParms = {
  title: string;
  content: string;
  cleanInput: () => void;
  isPublic: boolean;
};

export default function useDiary({
  title,
  content,
  cleanInput,
  isPublic,
}: useDiaryParms) {
  const [loading, setLoading] = useState(false);
  const firestoreAdd = async () => {
    const id = crypto.randomUUID();
    await addDoc(collection(db, "userDiary"), {
      uid: auth.currentUser?.uid,
      title,
      id,
      content,
      isPublic,
      createdAt: serverTimestamp(),
    });
  };

  const handleAddStore = async () => {
    console.log("auth");
    if (!auth.currentUser) return;
    if (title.trim().length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (content.trim().length < 20) {
      alert("일기 내용은 20자 이상 입력해주세요.");
      return;
    }
    try {
      setLoading(true);
      await firestoreAdd();
      console.log("서버 저장");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      cleanInput();
    }
  };
  return { loading, handleAddStore };
}
