document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const response = await fetch("https://docutool-backend.onrender.com/pdf-to-word", {
    method: "POST",
    body: formData
  });

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "converted.docx";
  a.click();
});