'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Logo from "./components/Logo/Logo";
import StepperForm from "./components/StepperForm/StepperForm";
import { Box } from "@mui/material";
export default function Home() {
  const [pending, setPending] = useState(false);
  return (
    <main className={styles.main}>
     {
      !pending ? (
        <>
        <Logo width="120" height="150" />
        <StepperForm setPending={setPending}/></>
      ) : (
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Logo width="200" height="250" animated/>
       </Box>
      )
     }
    </main>
  );
}
