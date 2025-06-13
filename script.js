document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Add the target conversion format (example: to DOCX)
  formData.append("to_format", "docx");

  const response = await fetch("https://docutool-backend-1.onrender.com/convert", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    alert("Conversion failed");
    return;
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "converted.docx";
  a.click();
});
