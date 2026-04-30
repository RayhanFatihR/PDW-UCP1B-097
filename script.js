// Database sementara (Array)
let members = [
    { nama: "Rayhan", email: "rayhan@tech.com", minat: "Cyber Security" },
    { nama: "Rizqy", email: "fandi@tech.com", minat: "Networking" }
];

// Menampilkan data di tabel (Hanya jalan di index.html)
const tableBody = document.getElementById('memberTableBody');
if (tableBody) {
    function renderTable() {
        tableBody.innerHTML = "";
        members.forEach(m => {
            tableBody.innerHTML += `
                <tr>
                    <td>${m.nama}</td>
                    <td>${m.email}</td>
                    <td><span class="badge bg-info text-dark">${m.minat}</span></td>
                </tr>
            `;
        });
    }
    renderTable();
}

// Logika Form (Hanya jalan di form.html)
const form = document.getElementById('memberForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newMember = {
            nama: document.getElementById('nama').value,
            email: document.getElementById('email').value,
            minat: document.getElementById('minat').value
        };

        members.push(newMember); // Simpan ke array
        
        // Tampilkan hasil di bawah form dengan gaya Bootstrap
        document.getElementById('result').innerHTML = `
            <div class="alert alert-success">
                <strong>Pendaftaran Berhasil!</strong><br>
                Selamat bergabung, ${newMember.nama}!
            </div>
        `;
        
        form.reset();
        console.log("Daftar Member Saat Ini:", members);
    });
}

// Gallery Functions
function changeImage() {
    const img = document.getElementById('mainImg');
    img.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500";
    alert("Inspirasi teknologi baru dimuat!");
}

function playPauseAudio() {
    const audio = document.getElementById('myAudio');
    audio.paused ? audio.play() : audio.pause();
}