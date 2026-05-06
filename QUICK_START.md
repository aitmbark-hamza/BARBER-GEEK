# ⚡ QUICK START GUIDE - 10 Minutes to Live

## 📥 Step 1: Setup (2 minutes)

```bash
# Open terminal in project folder
cd barber-geek-website

# Install dependencies
npm install

# Start development server
npm run dev
```

**Result**: Website opens at http://localhost:3000

---

## 🎨 Step 2: Customize (5 minutes)

### MUST DO - Contact Information

**File**: `src/components/Contact/Contact.jsx`

Find and update (around line 7):

```javascript
// YOUR ADDRESS
content: '123 Your Street, Your City, State 12345',

// YOUR PHONE
content: '+1 (555) 123-4567',

// YOUR HOURS
content: 'Mon-Sat: 10am-8pm\nSun: 12pm-6pm',
```

### MUST DO - WhatsApp Number

**File**: `src/components/BookingForm/BookingForm.jsx`

Find around line 37:

```javascript
// Replace YOUR_PHONE_NUMBER with your actual number
const whatsappUrl = `https://wa.me/+15551234567?text=...`;
```

Example: `https://wa.me/+15551234567` (with country code)

### Should Do - Business Name

**File**: `src/components/Navbar/Navbar.jsx`

Find around line 25:

```jsx
<span className={styles.logoText}>YOUR SHOP NAME</span>
```

### Should Do - Services & Pricing

**File**: `src/components/Services/Services.jsx`

Find around line 11, update the array:

```javascript
const services = [
  {
    id: 1,
    title: 'Classic Fade',
    description: 'Your description',
    icon: '✂️',
    price: '$35',
  },
  // ...update all services...
];
```

### Should Do - Social Media Links

**File**: `src/components/Contact/Contact.jsx`

Find around line 30:

```javascript
const socialLinks = [
  { icon: '📷', name: 'Instagram', url: 'https://instagram.com/YOUR_HANDLE' },
  { icon: '💬', name: 'WhatsApp', url: 'https://wa.me/YOUR_NUMBER' },
  // ...update links...
];
```

---

## 🧪 Step 3: Test (2 minutes)

### Desktop Testing
1. Website already open at http://localhost:3000
2. Click "Book Now" button
3. Fill form and submit (test WhatsApp link)
4. Scroll through all sections
5. Test navigation links

### Mobile Testing
```bash
# Find your IP address:
# Windows: ipconfig
# Mac/Linux: ifconfig

# Visit from your phone:
# http://YOUR_IP:3000
# Example: http://192.168.1.100:3000
```

Or use Browser DevTools:
- Press F12
- Press Ctrl+Shift+M (toggle mobile)
- Test responsiveness

---

## 🚀 Step 4: Deploy (1 minute)

### Option A: Vercel (Easiest)

```bash
# Install vercel CLI
npm install -g vercel

# Build the project
npm run build

# Deploy
vercel

# Follow prompts, connect GitHub (optional)
# Your site is now live!
```

### Option B: Netlify

1. Build: `npm run build`
2. Go to netlify.com
3. Drag & drop the `dist` folder
4. Done! You have a live URL

### Option C: Traditional Hosting

1. Build: `npm run build`
2. FTP upload the `dist` folder to your hosting
3. Point domain to the folder
4. Done!

---

## 📝 Customization Checklist

**Critical** (Without these, site won't function for bookings):
- [ ] Update phone number in BookingForm
- [ ] Update address in Contact section
- [ ] Update WhatsApp number for booking

**Important** (Site will work, but looks generic):
- [ ] Update business name in navbar
- [ ] Update services list with your services
- [ ] Update social media links
- [ ] Add about section text

**Nice to Have** (Recommended for better conversions):
- [ ] Update portfolio items
- [ ] Change colors if desired
- [ ] Add real images (portfolio, about)
- [ ] Update testimonials
- [ ] Customize animations

---

## 📱 File Locations Quick Reference

| What to Change | File Path | Approximate Line |
|---|---|---|
| Shop Name | `src/components/Navbar/Navbar.jsx` | 25 |
| Phone Number | `src/components/BookingForm/BookingForm.jsx` | 37 |
| Address | `src/components/Contact/Contact.jsx` | 7 |
| Hours | `src/components/Contact/Contact.jsx` | 18 |
| Services | `src/components/Services/Services.jsx` | 11 |
| Social Links | `src/components/Contact/Contact.jsx` | 30 |
| Colors | `src/App.module.css` | 1 |
| About Text | `src/components/About/About.jsx` | 20+ |
| Portfolio | `src/components/Portfolio/Portfolio.jsx` | 8 |

---

## 🎯 Testing the Booking Form

### WhatsApp Booking Test

1. Click "Book Now" button
2. Fill form:
   - Name: Test Name
   - Phone: (555) 123-4567
   - Service: Classic Fade
   - Date: Tomorrow's date
   - Time: 2:00 PM
3. Click "Send via WhatsApp"
4. You should see WhatsApp link or open WhatsApp app
5. Message should appear with booking details

**Note**: WhatsApp number must be correct for this to work!

---

## 🔍 Browser DevTools Tips

### Mobile Testing (Chrome)
1. Press F12 (Developer Tools)
2. Press Ctrl+Shift+M (Mobile toggle)
3. Select device (iPhone, Pixel, etc.)
4. Resize and test

### Check Errors
1. Press F12
2. Go to Console tab
3. Refresh page
4. Look for red errors
5. Fix based on error message

### Inspect Elements
1. Press F12
2. Click element inspector icon
3. Click on any element
4. See HTML and CSS for that element

---

## 🎨 Quick Color Changes

Want to change colors? Edit `src/App.module.css`:

Find `:root {` at top, update:

```css
--primary-dark: #0f0f0f;      /* Background color */
--accent-gold: #d4af37;        /* Main accent (change this!) */
--accent-orange: #ff8c42;      /* Secondary accent (change this!) */
--text-primary: #ffffff;       /* Text color */
--text-secondary: #b0b0b0;     /* Muted text */
```

Save file, browser auto-refreshes. That's it!

---

## ⚠️ Common Issues & Fixes

### Issue: "Port 3000 already in use"
```bash
npm run dev -- --port 3001
# Uses port 3001 instead
```

### Issue: Booking link shows error
- Check phone number format
- Must include country code: +1 for USA
- Test at: https://wa.me/+15551234567

### Issue: Styles look broken
```bash
# Clear cache and restart
Ctrl+Shift+Delete (clear cache)
npm run dev
```

### Issue: Form not submitting
- All fields are required (marked with *)
- Check browser console (F12) for errors
- Make sure WhatsApp number is correct

### Issue: Mobile menu not working
- Check navbar is sticky (should stay on top)
- Hamburger menu appears on screens < 768px
- Test with DevTools mobile view

---

## 📲 Mobile Optimization Checklist

- [ ] Hamburger menu works
- [ ] Text is readable (not too small)
- [ ] Buttons are clickable (not too small)
- [ ] Images load properly
- [ ] Forms work on mobile keyboard
- [ ] No horizontal scrolling
- [ ] Colors match on mobile
- [ ] Sticky navbar stays at top

---

## 🔄 Deployment Checklist

Before deploying to live:

**Code**:
- [ ] All customizations done
- [ ] No error messages in console
- [ ] Tested on mobile
- [ ] Tested booking form
- [ ] All links working

**Content**:
- [ ] Phone number correct
- [ ] Address correct
- [ ] Hours correct
- [ ] Services updated
- [ ] Social links working

**Build**:
- [ ] Run `npm run build`
- [ ] `dist` folder created
- [ ] No build errors

**Hosting**:
- [ ] Vercel/Netlify setup OR
- [ ] FTP credentials ready OR
- [ ] Server access ready

---

## 🎯 Next Steps After Launch

### Day 1
- Monitor bookings
- Test booking form yourself
- Check mobile experience
- Share on social media

### Week 1
- Respond to all inquiries within 2 hours
- Update portfolio with recent work
- Monitor website traffic
- Gather customer feedback

### Month 1
- Analyze what's working
- Update portfolio monthly
- Keep hours/services current
- Share on social media regularly

### Quarter 1
- Review analytics
- Update content
- Optimize for conversions
- Plan improvements

---

## 📞 Troubleshooting Help

**Before asking for help, check:**

1. Did you install dependencies? `npm install`
2. Did you save all your changes?
3. Did you try clearing browser cache? (Ctrl+Shift+Delete)
4. Did you check browser console? (F12)
5. Did you verify phone number format?

**Still stuck?**
- See README.md for detailed docs
- See CUSTOMIZATION.md for all options
- Check PROJECT_OVERVIEW.md for reference

---

## 🚀 You're Ready!

**You now have:**
✅ Professional barber shop website
✅ Mobile-optimized design
✅ WhatsApp booking system
✅ Portfolio gallery
✅ Contact information
✅ Social media integration

**Next:**
1. Customize contact info (5 min)
2. Test locally (2 min)
3. Deploy live (1 min)
4. Start booking customers!

---

## 💡 Pro Tips

1. **Update regularly** - Add new portfolio items monthly
2. **Respond fast** - Reply to bookings within 1-2 hours
3. **Test thoroughly** - Test on multiple devices before launch
4. **Monitor bookings** - Track where bookings come from
5. **Use analytics** - Google Analytics shows which pages convert
6. **Keep it fresh** - Update services/prices as needed
7. **Mobile first** - 70% traffic will be mobile

---

## 🎓 Quick Reference

**Common Commands:**
```bash
npm install         # Install dependencies
npm run dev        # Start development
npm run build      # Create production build
Ctrl+C            # Stop development server
```

**Key Files:**
- Services: `src/components/Services/Services.jsx`
- Contact: `src/components/Contact/Contact.jsx`
- Booking: `src/components/BookingForm/BookingForm.jsx`
- Colors: `src/App.module.css`

---

## ✨ You've Got This!

Everything is ready. The code is clean, the design is professional, and the system is in place.

**All you need to do:**
1. Update your info
2. Deploy it
3. Start booking customers

**That's it!**

Good luck! ✂️✨

---

**Questions?** See README.md or CUSTOMIZATION.md

**Ready?** Run `npm run dev` and let's go!
