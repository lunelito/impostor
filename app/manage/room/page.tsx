"use client"
import { useUserContext } from '@/src/lib/context/userContext';
import React from 'react'

export default function page() {
  const { userList, setUserList } = useUserContext();
  console.log(userList)
  return (
    <div>
      room
    </div>
  )
}
