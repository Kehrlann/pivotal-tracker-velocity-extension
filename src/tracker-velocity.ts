function updateVelocity() {
  console.log("🤖 Updating velocity...")
  const velocityBtn: HTMLElement | null = document.querySelector(
    '[type="button"][title="Velocity"][data-aid="VelocityIndicator"]'
  );

  const currentVelocity = velocityBtn?.textContent;
  console.log(`🤖 Current velocity: ${currentVelocity}`)
  if (currentVelocity === null) {
    console.log(`🤖 Current velocity unknown, rescheduling...`);
    setTimeout(updateVelocity, 2000);
    return;
  } else if (currentVelocity !== "1") {
    console.log(`🤖 Current velocity is not 1, bailing...`);
  }
  velocityBtn?.click();

  const velocityInput: HTMLInputElement | null = document.querySelector(
    "input#velocity_overridden_velocity"
  );
  const submitBtn: HTMLElement | null = document.querySelector(
    '[type="submit"][title="Apply"]'
  );
  if (velocityInput === null || submitBtn === null) {
    console.log(`🤖 Could not find velocity controls [input: ${velocityInput}, submit: ${velocityInput}], re-scheduling...`)
    setTimeout(updateVelocity, 2000);
    return;
  }

  velocityInput.value = "100";
  submitBtn.click();
  console.log(`🤖 Updated velocity`)
}

window.addEventListener("load", updateVelocity)