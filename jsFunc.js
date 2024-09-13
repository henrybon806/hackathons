//testing file - currenlty does not run anymore.

async function loadCollegesFromCSV() {
    try {
        const response = await fetch('schools.csv');
        const csvText = await response.text();

        const colleges = csvText.split('\n').map(college => college.trim()).filter(college => college !== '');
        const collegeDropdown = document.getElementById('college');

        colleges.forEach(function(college) {
            const option = document.createElement('option');
            option.value = college;
            option.text = college;
            collegeDropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading CSV file:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCollegesFromCSV);
console.log("test")