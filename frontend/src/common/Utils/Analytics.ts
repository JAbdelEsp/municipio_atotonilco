const trackVisit = async () => {
  try {
    await fetch(import.meta.env.VITE_API_URL + "visit/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: window.location.pathname,
        userAgent: navigator.userAgent,
      }),
    });
  } catch (error) {
    console.error("Error sending visit: ", error);
  }
};

export default trackVisit;
