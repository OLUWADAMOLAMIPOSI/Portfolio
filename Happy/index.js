
const DEPARTMENT_CODE = "LIN";
const HARMERTAN = "HARMERTAN";
const RAIN = "RAIN";
const EXCELLENT = "Excellent(A)";
const VERY_GOOD = "Very Good(B)";
const GOOD = "Good(C)";
const AVERAGE = "Average(D)";
const POOR = "Poor(E)";
const FAIL = "Fail(F)";
const INVALID_INPUT = "PLEASE INPUT A VALID CGPA";


const CREDIT_UNITS = {
    LIN111: 3.00,
    LIN112: 3.00,
    LIN113: 3.00,
    LIN114: 3.00,
    LIN115: 3.00,
    LIN116: 3.00,
    YOR114: 3.00,
    YOR111: 3.00,
    PHL101: 3.00,
    PHL104: 3.00,
    EGL101: 3.00,
    EGL102: 3.00,
};


const RAIN_COURSES = ["LIN114", "LIN116", "EGL102", "PHL104", "YOR114", "LIN112"];
const HARMERTAN_COURSES = ["LIN111", "LIN113", "LIN115", "PHL101", "EGL101", "YOR111"];


function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return { points: 5, grade: EXCELLENT };
    } else if (score >= 60) {
        return { points: 4, grade: VERY_GOOD };
    } else if (score >= 50) {
        return { points: 3, grade: GOOD };
    } else if (score >= 45) {
        return { points: 2, grade: AVERAGE };
    } else if (score >= 40) {
        return { points: 1, grade: POOR };
    } else if (score >= 0) {
        return { points: 0, grade: FAIL };
    } else {
        return { points: null, grade: INVALID_INPUT };
    }
}
function calculateGPA(courses) {
    let totalPoints = 0;
    let totalUnits = 0;

    for (const course of courses) {
        let score = parseInt(prompt(`Enter your score for ${course}: `));

        const { points, grade } = calculateGrade(score);

        
        if (points === null) {
            alert(INVALID_INPUT); 
        } else {
            alert(`Score for ${course}: ${score}, Grade: ${grade}`); 
            totalPoints += points * CREDIT_UNITS[course];
            totalUnits += CREDIT_UNITS[course];
        }
    }

    return totalUnits > 0 ? (totalPoints / totalUnits) : 0; 
}


alert("Welcome to the CGPA Calculator for Linguistics Students v1.0");
const departmentCode = prompt("Enter your Department Code: ").toUpperCase();

if (departmentCode === DEPARTMENT_CODE) {
    
    let harmertanGPA = calculateGPA(HARMERTAN_COURSES);
    alert(`Your ${HARMERTAN} semester GPA is: ${harmertanGPA.toFixed(2)}`);

    
    const calculateRain = confirm("Do you want to calculate the RAIN semester?");
    
    if (calculateRain) {
        
        let rainGPA = calculateGPA(RAIN_COURSES);
        alert(`Your ${RAIN} semester GPA is: ${rainGPA.toFixed(2)}`);

        
        const totalUnitsHarmertan = HARMERTAN_COURSES.reduce((sum, course) => sum + CREDIT_UNITS[course], 0);
        const totalUnitsRain = RAIN_COURSES.reduce((sum, course) => sum + CREDIT_UNITS[course], 0);
        
        const totalPointsHarmertan = harmertanGPA * totalUnitsHarmertan;
        const totalPointsRain = rainGPA * totalUnitsRain;

        const overallUnits = totalUnitsHarmertan + totalUnitsRain;
        const overallPoints = totalPointsHarmertan + totalPointsRain;

        const cgpa = overallUnits > 0 ? (overallPoints / overallUnits) : 0;

        alert(`Your overall CGPA for Part 1 is: ${cgpa.toFixed(2)}`);
    } else {
        alert("Calculation for RAIN semester canceled.");
    }
} else {
    alert("Invalid department code.");
}
