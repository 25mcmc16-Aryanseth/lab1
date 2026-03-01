var formJSON = {
    title: "Registration Form",
    fields: [
        { 
            type: "text", 
            label: "Full Name", 
            id: "name", 
            required: true 
        },
        { 
            type: "email", 
            label: "Email", 
            id: "email", 
            required: true 
        },
        { 
            type: "password", 
            label: "Password", 
            id: "password", 
            required: true 
        },
        { 
            type: "select", 
            label: "Country", 
            id: "country", 
            required: true,
            options: ["Select", "India", "USA", "Canada"]
        },
        {
            type: "select",
            label: "State",
            id: "state",
            options: ["Select", "California", "Texas", "New York"],
            dependsOn: "USA" 
        },
        {
            type: "radio",
            label: "Are you a Student?",
            id: "student",
            options: ["Yes", "No"]
        },
        {
            type: "text",
            label: "College Name",
            id: "college",
            dependsOnRadio: "Yes"
        }
    ]
};