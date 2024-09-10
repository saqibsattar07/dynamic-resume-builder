"use strict";
const form = document.getElementById("resumeForm");
const resumeDisplay = document.getElementById("resumeDisplay");
const profileImageUpload = document.getElementById("profileImageUpload");
const profileImagePreview = document.getElementById("profileImagePreview");
if (form && resumeDisplay && profileImageUpload && profileImagePreview) {
    let profileImageDataURL = "profile-placeholder.png"; // Default profile image
    profileImageUpload.addEventListener("change", (event) => {
        const file = event.target?.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImageDataURL = e.target?.result;
                profileImagePreview.src = profileImageDataURL; // Display uploaded image
            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name")?.value ?? "";
        const about = document.getElementById("about")?.value ?? "";
        const email = document.getElementById("email")?.value ?? "";
        const phone = document.getElementById("phone")?.value ?? "";
        const address = document.getElementById("address")?.value ?? "";
        const education = document.getElementById("education")?.value ?? "";
        const experience = document.getElementById("experience")?.value ?? "";
        const skills = document.getElementById("skills")?.value ?? "";
        const displayName = document.getElementById("displayName");
        const displayAbout = document.getElementById("displayAbout");
        const displayEmail = document.getElementById("displayEmail");
        const displayPhone = document.getElementById("displayPhone");
        const displayAddress = document.getElementById("displayAddress");
        const displayEducation = document.getElementById("displayEducation");
        const displayExperience = document.getElementById("displayExperience");
        const displaySkills = document.getElementById("displaySkills");
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
