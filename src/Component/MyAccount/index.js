import React ,  {useState , useEffect} from 'react';
import { Container , ProfileHeader , ProfileImage , ProfileInfo , ProfileContent , ProfileSection , SectionTitle , SectionContent , SkillList , SkillItem , ExperienceList , ExperienceItem , ExperienceTitle , ExperienceCompany , ExperienceDate } from './Style';
import axios from "axios";

const MyAccount = () => {

  const [ Profiles , setProfiles ] = useState([])
  useEffect ( ()=> {
    axios.get('js/data.json').then(res =>{setProfiles(res.data.Profiles)})
  } , [] )

  const ProfileData = Profiles.map( (profileItem) => {
    return(
      <Container  key={profileItem.id}>
        <ProfileHeader>
          <ProfileImage src={profileItem.Image} alt="Profile Image" />
          <ProfileInfo>
            <h1>{profileItem.FirstName} {profileItem.LastName}</h1>
            <p>{profileItem.Specialty}</p>
            <p>{profileItem.Email}</p>
          </ProfileInfo>
        </ProfileHeader>
        <ProfileContent>
          <ProfileSection>
            <SectionTitle>About Me</SectionTitle>
            <SectionContent>
              <p>{profileItem.About}.</p>
              <p>{profileItem.Phone}</p>
            </SectionContent>
          </ProfileSection>
          <ProfileSection>
            <SectionTitle>Skills</SectionTitle>
            <SectionContent>
              <SkillList>
                <SkillItem>React</SkillItem>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS</SkillItem>
              </SkillList>
            </SectionContent>
          </ProfileSection>
          <ProfileSection>
            <SectionTitle>Experience</SectionTitle>
            <SectionContent>
              <ExperienceList>
                <ExperienceItem>
                  <ExperienceTitle>Web Developer</ExperienceTitle>
                  <ExperienceCompany>XYZ Company</ExperienceCompany>
                  <ExperienceDate>2018 - Present</ExperienceDate>
                </ExperienceItem>
                <ExperienceItem>
                  <ExperienceTitle>Frontend Developer</ExperienceTitle>
                  <ExperienceCompany>ABC Company</ExperienceCompany>
                  <ExperienceDate>2016 - 2018</ExperienceDate>
                </ExperienceItem>
              </ExperienceList>
            </SectionContent>
          </ProfileSection>
        </ProfileContent>
      </Container>
    )
  } )
  return (
    <>
    {ProfileData}
    </>
  );
};

export default MyAccount;
