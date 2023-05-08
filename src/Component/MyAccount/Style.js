import styled from 'styled-components';


export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
  
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background-image: url("https://i.etsystatic.com/17116759/r/il/983c99/1902608817/il_794xN.1902608817_m9nz.jpg");
  height:400px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 42%; 
  margin-top: 420px; 
`;

export const ProfileInfo = styled.div`
  text-align: center;
  margin-top: 670px;
  margin-left: -21%;  
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #32325d;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
    color: #8898aa;
  }
`;

export const ProfileContent = styled.div`
  margin-top: 22%; 
  background-color: #f8f9fe;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
`;

export const ProfileSection = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #32325d;
`;

export const SectionContent = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #525f7f;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SkillItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
  color: #525f7f;
`;

export const ExperienceList = styled.ul`
  list-style: none  margin: 0;
  padding: 0;
`;

export const ExperienceItem = styled.li`
  margin-bottom: 20px;
`;

export const ExperienceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  color: #525f7f;
`;

export const ExperienceCompany = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #8898aa;
`;

export const ExperienceDate = styled.p`
  font-size: 16px;
  color: #8898aa;
`;
