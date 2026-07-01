```md
# Software Requirements Specification (SRS)

# Summora - AI-Based News Summarization Platform

---

## 1. Introduction

### 1.1 Purpose

Dokumen ini bertujuan untuk mendefinisikan kebutuhan perangkat lunak untuk pengembangan sistem **Summora**, yaitu platform berbasis AI yang dirancang untuk membantu pengguna memperoleh ringkasan berita secara otomatis dari berbagai sumber digital. Sistem memanfaatkan teknik Natural Language Processing (NLP), pencarian dokumen berbasis similarity, serta model Generative AI untuk menghasilkan ringkasan informasi yang relevan dan mudah dipahami.

### 1.2 Scope

Summora merupakan aplikasi berbasis web yang memungkinkan pengguna mencari berita berdasarkan kata kunci tertentu, mengambil artikel dari berbagai sumber berita, melakukan analisis terhadap artikel yang relevan, menghasilkan ringkasan otomatis, serta menampilkan analisis sentimen dan visualisasi data.

### 1.3 Intended Audience

Dokumen ini ditujukan untuk pengembang sistem, pembimbing akademik, penguji proyek akhir, dan pihak terkait yang membutuhkan pemahaman terhadap kebutuhan sistem yang dikembangkan.

---

## 2. Overall Description

### 2.1 Product Perspective

Summora merupakan aplikasi web yang mengintegrasikan proses scraping data berita, preprocessing teks, analisis similarity dokumen, analisis sentimen, serta Generative AI untuk menghasilkan ringkasan otomatis dalam satu sistem terintegrasi.

### 2.2 Product Functions

Sistem memiliki fungsi utama sebagai berikut:

- Mengambil artikel berita dari berbagai sumber digital  
- Membersihkan dan memproses teks hasil scraping  
- Mengubah data teks menjadi representasi numerik menggunakan TF-IDF Vectorization  
- Mencari artikel relevan berdasarkan kata kunci menggunakan Cosine Similarity  
- Melakukan analisis sentimen terhadap artikel yang ditemukan  
- Menghasilkan ringkasan otomatis menggunakan model AI  
- Menampilkan hasil analisis dan visualisasi kepada pengguna  

### 2.3 User Characteristics

Pengguna sistem merupakan pengguna umum yang ingin memperoleh informasi berita secara ringkas tanpa harus membaca keseluruhan artikel secara manual.

---

## 3. Functional Requirements

### FR-01 User Input

Sistem harus menerima input berupa kata kunci pencarian dari pengguna.

### FR-02 Source Selection

Sistem harus memungkinkan pengguna memilih sumber berita yang akan digunakan.

### FR-03 Article Scraping

Sistem harus mampu mengambil artikel berita dari sumber yang dipilih pengguna.

### FR-04 Text Preprocessing

Sistem harus melakukan preprocessing terhadap teks artikel, meliputi:

- Lowercase conversion  
- Punctuation removal  
- Stopword removal  
- Stemming  

### FR-05 TF-IDF Vectorization

Sistem harus mengubah artikel menjadi representasi numerik menggunakan metode TF-IDF Vectorizer.

### FR-06 Similarity Search

Sistem harus menghitung tingkat relevansi artikel terhadap keyword menggunakan Cosine Similarity.

### FR-07 Sentiment Analysis

Sistem harus melakukan analisis sentimen terhadap artikel yang ditemukan.

### FR-08 AI Summary Generation

Sistem harus menghasilkan ringkasan otomatis menggunakan model Generative AI melalui API eksternal.

### FR-09 Visualization

Sistem harus menampilkan visualisasi word cloud berdasarkan hasil analisis data teks.

### FR-10 Display Result

Sistem harus menampilkan hasil summary, sentiment analysis, dan visualisasi kepada pengguna.

---

## 4. Non-Functional Requirements

### Performance

Sistem mampu memproses permintaan pengguna dengan waktu respons yang efisien tergantung jumlah artikel yang diproses.

### Reliability

Sistem harus mampu menangani kegagalan API eksternal tanpa menyebabkan aplikasi berhenti secara keseluruhan.

### Usability

Antarmuka sistem harus mudah digunakan dan dapat dipahami pengguna umum.

### Scalability

Sistem dapat dikembangkan untuk mendukung lebih banyak sumber berita di masa mendatang.

### Security

API key yang digunakan untuk integrasi model AI harus disimpan secara aman menggunakan environment variables.

---

## 5. Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | React.js + Vite |
| Backend | Node.js + Express.js |
| Web Scraping | Python |
| NLP Processing | Scikit-learn |
| Similarity Search | TF-IDF + Cosine Similarity |
| Visualization | WordCloud |
| AI Model | Gemini API |

---

## 6. System Workflow

1. User memasukkan keyword dan memilih sumber berita  
2. Sistem mengambil artikel dari sumber yang dipilih  
3. Artikel diproses melalui preprocessing text  
4. Sistem melakukan TF-IDF Vectorization  
5. Sistem menghitung Cosine Similarity terhadap keyword  
6. Sistem mengambil artikel dengan similarity tertinggi  
7. Sistem menjalankan sentiment analysis  
8. Sistem mengirim artikel ke model AI untuk menghasilkan summary  
9. Sistem menampilkan summary, sentiment, dan visualisasi kepada user  

---

## 7. Expected Output

Sistem menghasilkan:

- Ringkasan otomatis dari artikel berita  
- Daftar artikel paling relevan berdasarkan keyword  
- Hasil analisis sentimen (Positive / Neutral / Negative)  
- Visualisasi word cloud berdasarkan artikel yang diproses  
- Tampilan hasil analisis secara interaktif pada web application  

---
```
