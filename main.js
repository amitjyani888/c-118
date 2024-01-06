
// Define a variable random_number
let random_number;

// Generate a random number within the range of the quick_draw_data_set array length
random_number = Math.floor(Math.random() * quick_draw_data_set.length);

// Print the random sketch name
console.log(quick_draw_data_set[random_number]);

// Get the random sketch name and store it in the sketch variable
let sketch = quick_draw_data_set[random_number];

// Update the text of the span tag holding the Sketch to be drawn using its id
document.getElementById('sketchToDraw').innerText = 'Sketch To be Drawn: ' + sketch;

// Define variables
let timer_counter = 0;
let timer_check = '';
let drawn_sketch = '';
let answer_holder = '';
let score = 0;
// These variables will be used in the upcoming projects.

let classifier;

function preload() {
    // Load the doodlenet model
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    // Your existing setup function code goes here

    // Call the classifyCanvas function when the mouse is released
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
    // Set strokeWeight and stroke color as per your choice
    strokeWeight(4);
    stroke(0); // Set your desired stroke color

    // Check if the mouse is pressed
    if (mouseIsPressed) {
        // Draw on the canvas
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    // Check for any error
    if (error) {
        console.error(error);
    } else {
        // Log the results
        console.log(results);

        // Get the first label from the results array
        let drawn_sketch = results[0].label;

        // Update the HTML tag with the text "Your Sketch" + dr
