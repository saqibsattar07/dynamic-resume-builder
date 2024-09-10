const form = document.getElementById("resumeForm") as HTMLFormElement | null;
const resumeDisplay = document.getElementById(
  "resumeDisplay"
) as HTMLElement | null;
const profileImageUpload = document.getElementById(
  "profileImageUpload"
) as HTMLInputElement | null;
const profileImagePreview = document.getElementById(
  "profileImagePreview"
) as HTMLImageElement | null;

if (form && resumeDisplay && profileImageUpload && profileImagePreview) {
  let profileImageDataURL = "profile-placeholder.png"; // Default profile image

  profileImageUpload.addEventListener("change", (event) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        profileImageDataURL = e.target?.result as string;
        profileImagePreview.src = profileImageDataURL; // Display uploaded image
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      (document.getElementById("name") as HTMLInputElement)?.value ?? "";
    const about =
      (document.getElementById("about") as HTMLTextAreaElement)?.value ?? "";
    const email =
      (document.getElementById("email") as HTMLInputElement)?.value ?? "";
    const phone =
      (document.getElementById("phone") as HTMLInputElement)?.value ?? "";
    const address =
      (document.getElementById("address") as HTMLTextAreaElement)?.value ?? "";
    const education =
      (document.getElementById("education") as HTMLInputElement)?.value ?? "";
    const experience =
      (document.getElementById("experience") as HTMLTextAreaElement)?.value ??
      "";
    const skills =
      (document.getElementById("skills") as HTMLInputElement)?.value ?? "";

    const displayName = document.getElementById("displayName") as HTMLElement;
    const displayAbout = document.getElementById("displayAbout") as HTMLElement;
    const displayEmail = document.getElementById("displayEmail") as HTMLElement;
    const displayPhone = document.getElementById("displayPhone") as HTMLElement;
    const displayAddress = document.getElementById(
      "displayAddress"
    ) as HTMLElement;
    const displayEducation = document.getElementById(
      "displayEducation"
    ) as HTMLElement;
    const displayExperience = document.getElementById(
      "displayExperience"
    ) as HTMLElement;
    const displaySkills = document.getElementById(
      "displaySkills"
    ) as HTMLElement;

    // Update resume display with form values
    displayName.innerText = name;
    displayAbout.innerText = about;
    displayEmail.innerText = email;
    displayPhone.innerText = phone;
    displayAddress.innerText = address;
    displayEducation.innerText = education;
    displayExperience.innerText = experience;
    displaySkills.innerText = skills;

    resumeDisplay.style.display = "block"; // Show the resume section
  });
}
