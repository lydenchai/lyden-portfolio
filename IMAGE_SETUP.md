# Project Images Setup

## Adding Your Project Images

To replace the placeholder images with your actual project screenshots:

1. **Place your project images** in the `public/images/` folder with these exact names:
   - `hr.png` - NSSF HR Admin System
   - `acc.png` - NSSF Accounting Admin System  
   - `benefit.png` - NSSF Benefit Admin System
   - `inspection.png` - NSSF Inspection Admin System
   - `hospital.png` - NSSF Hospital Admin System
   - `rehabilitation.png` - NSSF Rehabilitation Admin System

2. **Update the image paths** in `src/components/Projects.tsx`:
   Replace the Unsplash URLs with `/images/[filename].png`

   Example:
   ```javascript
   // Change from:
   image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43...',
   
   // To:
   image: '/images/hr.png',
   ```

3. **Recommended image specifications**:
   - Format: PNG or JPG
   - Size: 800x600px or similar aspect ratio
   - Quality: High resolution for crisp display
   - File size: Optimized for web (under 500KB each)

## Current Projects Featured

### Featured Projects (Main Showcase):
- NSSF HR Admin
- NSSF Accounting Admin  
- NSSF Benefit Admin
- Bontub Rental Platform

### Other Projects (Grid View):
- NSSF Inspection Admin
- NSSF Hospital Admin
- NSSF Rehabilitation Admin

The Bontub project already uses the live image from https://bontub.com/bg-hero.png