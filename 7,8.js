// Create arrays for subjects
var DSA = [];
var PL = [];
var Networks = [];

// Function to display enrolled students for a given subject
function displayEnrolledStudents(subject) {
    if (subject === 'DSA') {
        console.log('Currently enrolled students in DSA:', DSA);
    } else if (subject === 'PL') {
        console.log('Currently enrolled students in PL:', PL);
    } else if (subject === 'Networks') {
        console.log('Currently enrolled students in Networks:', Networks);
    }
}

// Function to enroll or unenroll students
function studentEnrollment() {
    var subject;
    var operation;

    // Main loop for subject selection
    while (true) {
        // Ask user to select a subject
        subject = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\nEnter your choice (A/B/C):").toUpperCase();

        // Set subject name based on user input
        if (subject === 'A') {
            subject = 'DSA';
        } else if (subject === 'B') {
            subject = 'PL';
        } else if (subject === 'C') {
            subject = 'Networks';
        } else {
            console.log("Invalid subject choice. Please try again.");
            continue; // Go back to subject selection
        }

        // Operations loop for selected subject
        while (true) {
            // Ask user to select an operation
            operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit\nEnter your choice (A/B/C/D):").toUpperCase();

            if (operation === 'A') {
                // Enroll a student
                var studentName = prompt("Enter the name of the student to enroll:");
                if (subject === 'DSA') {
                    DSA.push(studentName);
                } else if (subject === 'PL') {
                    PL.push(studentName);
                } else if (subject === 'Networks') {
                    Networks.push(studentName);
                }
                console.log(studentName + ' has been enrolled in ' + subject + '.');
            } else if (operation === 'B') {
                // Unenroll a student
                displayEnrolledStudents(subject);
                var unenrollName = prompt("Enter the name of the student to unenroll:");
                var index;
                if (subject === 'DSA') {
                    index = DSA.indexOf(unenrollName);
                    if (index > -1) {
                        DSA.splice(index, 1);
                        console.log(unenrollName + ' has been unenrolled from ' + subject + '.');
                    } else {
                        console.log(unenrollName + ' is not enrolled in ' + subject + '.');
                    }
                } else if (subject === 'PL') {
                    index = PL.indexOf(unenrollName);
                    if (index > -1) {
                        PL.splice(index, 1);
                        console.log(unenrollName + ' has been unenrolled from ' + subject + '.');
                    } else {
                        console.log(unenrollName + ' is not enrolled in ' + subject + '.');
                    }
                } else if (subject === 'Networks') {
                    index = Networks.indexOf(unenrollName);
                    if (index > -1) {
                        Networks.splice(index, 1);
                        console.log(unenrollName + ' has been unenrolled from ' + subject + '.');
                    } else {
                        console.log(unenrollName + ' is not enrolled in ' + subject + '.');
                    }
                }
            } else if (operation === 'C') {
                // Select another subject
                break; // Exit inner loop to select a new subject
            } else if (operation === 'D') {
                // Exit the program
                console.log('Final enrolled students:');
                console.log('DSA:', DSA);
                console.log('PL:', PL);
                console.log('Networks:', Networks);
                return; // Exit the function and program
            } else {
                console.log("Invalid operation choice. Please try again.");
            }
        }
    }
}

// Start the enrollment process
studentEnrollment();