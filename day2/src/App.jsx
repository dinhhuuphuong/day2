import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const student = {
    name: "Nguyễn Văn 234",
    desription: "Sinh viên ABC 222 .",
    mssv: "AAA",
    className: "React - Next",
    avatar: viteLogo,
    year: "2024",
  };

  return (
    <>
      <h1>Thông tin sinh viên</h1>
      <infoStudent student={student}/> 
      <infoStudent/>
       <div>Họ tên: {student.name}</div>
      <div>Mô tả: {student.desription}</div>
      <i>MSSV: {student.mssv}</i>
      <br />
      <br />
      <strong>Lớp: {student.className}</strong>
      <div>Khóa: {student.year}</div>
      <span>Avatar:</span>
      <img src={student.avatar} alt="logo" />
      <div></div>
    </>
  );
}

export default App
