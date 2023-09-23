<style>
.calculator-container {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #007bff;
}

.dimension-container {
    display: inline-block;
    width: calc(50% - 10px); /* 10px margin between containers */
    vertical-align: top;
    margin-right: 10px;
    text-align: left;
}

h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

.input-container {
    margin-bottom: 10px;
}

label {
    font-weight: bold;
    display: block;
    color: #333;
}

input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 4px;
}

.result-container {
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
}

#brickCount {
    font-size: 24px;
    color: #007bff;
}
</style>
<script>
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
            brickCount.textContent = Math.ceil(bricksRequired);
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
</script>
</style>
