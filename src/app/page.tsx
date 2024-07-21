'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Logo from "./components/Logo/Logo";
import StepperForm from "./components/StepperForm/StepperForm";
import { Box } from "@mui/material";
import Gratitude from "./components/StepperForm/Gratitude/Gratitude";

export default function Home() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 1000)
  }

  if (success) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Logo width="120" height="150" />
        <Gratitude />
      </Box>
    )
  }
  return (
    <main className={styles.main}>
      {
        !pending ? (
          <>
            <Logo width="120" height="150" />
            <StepperForm setPending={setPending} setSuccess={setSuccess} />
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Logo width="200" height="250" animated />
          </Box>
        )
      }
    </main>
  );
}
