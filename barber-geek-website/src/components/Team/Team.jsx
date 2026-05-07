import { Camera } from 'lucide-react';
import styles from './Team.module.css';

const Team = () => {

  const teamMembers = [
    {
      id: 1,
      name: 'Michal Ruheen',
      role: 'Hair Stylist',
      experience: '15+ Years',
      specialty: 'Classic Fades & Beard Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
      bio: 'Expert in traditional barbering techniques with a modern twist.'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Senior Barber',
      experience: '10+ Years',
      specialty: 'Modern Cuts & Styling',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
      bio: 'Specializes in contemporary hairstyles and grooming trends.'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Barber Stylist',
      experience: '8+ Years',
      specialty: 'Precision Cuts',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800',
      bio: 'Known for attention to detail and hot towel shaves.'
    },
    {
      id: 4,
      name: 'Alex Rivera',
      role: 'Junior Barber',
      experience: '5+ Years',
      specialty: 'Trending Styles',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800',
      bio: 'Fresh energy and expertise in children\'s grooming.'
    }
  ];

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        {/* Header matching image_bf2c19.jpg */}
        <div className={styles.header}>
          <h2 className={styles.title}>Talented <span className={styles.accent}>barbers</span></h2>
        </div>

        {/* Team Grid: Responsive 2-column or 4-column */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={styles.teamCard}
            >
              <div className={styles.imageContainer}>
                <img src={member.image} alt={member.name} className={styles.memberImage} />
                
                {/* Hover Overlay Content */}
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.overlayText}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                    <div className={styles.instagramCircle}>
                      <Camera size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;