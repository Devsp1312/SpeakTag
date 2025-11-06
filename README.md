# SpeakTag - Smart Return System

SpeakTag is a smart item return system that uses QR codes and NFC tags to help lost items find their way back home. This repository contains the web interface for the Return This Item feature.

## Features

- 📱 Mobile-first, responsive design
- 🔒 Privacy-focused messaging system
- 🌍 Optional city-level location sharing
- ⚡ Quick 30-second return process
- 🎨 Clean, trustworthy user interface
- 🔐 Secure message relay system

## Project Structure

```
SpeakTag/
├── index.html          # Main return item page
├── public/
│   ├── css/
│   │   └── styles.css  # Styles and animations
│   └── js/
│       └── app.js      # Interactive functionality
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Devsp1312/SpeakTag.git
   cd SpeakTag
   ```

2. Serve the project locally:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js:
     ```bash
     npx serve public
     ```

3. Open your browser and navigate to:
   - Python: `http://localhost:8000`
   - Node.js: `http://localhost:3000`

## Technology Stack

- HTML5
- CSS3 (with custom animations)
- Vanilla JavaScript
- Mobile-first responsive design
- Location API integration
- Font: Inter (Google Fonts)

## Privacy Features

- No personal information required
- City-level location sharing only (optional)
- Messages relayed through BackHome Labs
- No direct contact information shared between parties

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

The system is designed with privacy and security in mind:
- No sensitive data stored in frontend
- Optional contact information
- Secure message relay system
- City-level location sharing only

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## About BackHome Labs

BackHome Labs is dedicated to creating innovative solutions for returning lost items to their rightful owners while maintaining privacy and security.

---

Built with ❤️ by BackHome Labs