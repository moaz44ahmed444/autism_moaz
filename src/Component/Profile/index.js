import React from "react";
import { ProfileSkills, Profile , ProfileList , ProfileItem , Span ,SpanWeb , Skills , SkillsDesk , Bar , SpanTitle , SpanPrec , BarParent , SpanSp1 , SpanSp2 , SpanSp3 , Title , TitleSpan } from './Style.js'
const Profie = () => {
  return (
    <ProfileSkills>
    <div className="container">
        <Profile>
            <Title><TitleSpan>My </TitleSpan>Profile</Title>
            <ProfileList>
                <ProfileItem>
                    <Span>Name</Span>
                    Hamza Nabil
                </ProfileItem>
                <ProfileItem>
                    <Span>Birthday</Span>
                    21/1/1996
                </ProfileItem>
                <ProfileItem>
                    <Span>Address</Span>
                    Ain shams
                </ProfileItem>
                <ProfileItem>
                    <Span>Phone</Span>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <Span>Email</Span>
                    hamza@hamza.com
                </ProfileItem>
                <ProfileItem>
                    <Span>Website</Span>
                    <SpanWeb>www.google.com</SpanWeb>
                </ProfileItem>
            </ProfileList>
        </Profile>
        
        <Skills>
            <Title>Some <TitleSpan>skills</TitleSpan></Title>
            <SkillsDesk>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesk>
            <Bar>
                <SpanTitle className="title">Bootstrap</SpanTitle>
                <SpanPrec>100%</SpanPrec>
                <BarParent>
                    <SpanSp1></SpanSp1>
                </BarParent>
            </Bar>
            
            <Bar className="bar">
                <SpanTitle>CSS3</SpanTitle>
                <SpanPrec>90%</SpanPrec>
                <BarParent>
                    <SpanSp2></SpanSp2>
                </BarParent>
            </Bar>
            
            <Bar className="bar">
                <SpanTitle>Photoshop</SpanTitle>
                <SpanPrec>80%</SpanPrec>
                <BarParent>
                    <SpanSp3></SpanSp3>
                </BarParent>
            </Bar>
        </Skills>
        
    </div>
</ProfileSkills>
  );
}

export default Profie;
