document.addEventListener("DOMContentLoaded", function () {
    const wallLengthInput = document.getElementById("wallLength");
    const wallHeightInput = document.getElementById("wallHeight");
    const wallWidthInput = document.getElementById("wallWidth");
    const brickLengthInput = document.getElementById("brickLength");
    const brickWidthInput = document.getElementById("brickWidth");
    const brickHeightInput = document.getElementById("brickHeight");
    const brickCount = document.getElementById("brickCount");

    const updateBrickCount = () => {
        const wallLength = parseFloat(wallLengthInput.value);
        const wallHeight = parseFloat(wallHeightInput.value);
        const wallWidthInInches = parseFloat(wallWidthInput.value);
        const brickLengthInInches = parseFloat(brickLengthInput.value);
        const brickWidthInInches = parseFloat(brickWidthInput.value);
        const brickHeightInInches = parseFloat(brickHeightInput.value);

        if (!isNaN(wallLength) && !isNaN(wallHeight) && !isNaN(wallWidthInInches) && !isNaN(brickLengthInInches) && !isNaN(brickWidthInInches) && !isNaN(brickHeightInInches)) {
            const wallWidth = wallWidthInInches / 12;
            const brickLength = brickLengthInInches / 12;
            const brickWidth = brickWidthInInches / 12;
            const brickHeight = brickHeightInInches / 12;

            const bricksRequired = (wallLength * wallHeight) / (wallWidth * brickLength * brickWidth * brickHeight);

            // Adjusting for mortar and wastage
            const bricksPerCubicFoot = 13.5;
            const totalBricksRequired = bricksRequired * bricksPerCubicFoot;

            brickCount.textContent = Math.ceil(totalBricksRequired);
        } else {
            brickCount.textContent = "Invalid Input";
        }
    };

    // Add input event listeners to update result automatically
    wallLengthInput.addEventListener("input", updateBrickCount);
    wallHeightInput.addEventListener("input", updateBrickCount);
    wallWidthInput.addEventListener("input", updateBrickCount);
    brickLengthInput.addEventListener("input", updateBrickCount);
    brickWidthInput.addEventListener("input", updateBrickCount);
    brickHeightInput.addEventListener("input", updateBrickCount);

    // Initial update
    updateBrickCount();
});
