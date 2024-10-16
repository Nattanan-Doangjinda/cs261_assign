function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

 

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Application-Key': "TU68a4d162f54af68e5d275b5397af78dad6d51724120e8dc8922e598ff4b614fe029ee6a4e14828d521e74b16a254c729", 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "UserName": username, "PassWord": password })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultS').innerHTML = '';
            document.getElementById('resultE').innerHTML = '';
            document.getElementById('message').innerText = ''; 


            if (data.status == true) {
                if (data.type == "student") {
                    document.getElementById('resultS').innerHTML = `<p>ชื่อ-นามสกุล: ${data.displayname_th}</p>
                    <p>Name: ${data.displayname_en}</p>
                    <p>Email: ${data.email}</p>
                    <p>Faculty: ${data.faculty}</p>
                    <p>Department: ${data.department}</p>
                    `;

                } else if (data.type == "Employee") {
                    document.getElementById('resultE').innerHTML = `<p>ชื่อ-นามสกุล: ${data.displayname_th}</p>
                    <p>Name: ${data.displayname_en}</p>
                    <p>Email: ${data.email}</p>
                    <p>Department: ${data.department}</p>
                    <p>Organization: ${data.organization}</p>`;
                }

            } else {
                document.getElementById('message').innerText = data.message; // แสดงข้อความจาก API หาก username หรือ password ผิด
            }

        })
        .catch(error => console.error('Error:', error));
}




