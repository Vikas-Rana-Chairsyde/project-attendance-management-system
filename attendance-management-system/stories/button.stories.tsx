import React from 'react';
import Button from '../app/components/button'; // Update the path to your actual component

export default {
  title: 'Components/Button', // This is how it shows up in Storybook's sidebar
  component: Button,
};

export const Primary = () => <Button>Primary Button</Button>;
export const Secondary = () => <Button>Secondary Button</Button>;
export const Approve = () => <Button style={{ background: "#F26522", color: "#FFF", marginTop: 10, fontSize: "11px", fontWeight: 700, border: "1px solid #F26522", borderRadius: "5px", padding: "5px 6px", textAlign: "center", cursor: "pointer" }}>Approve</Button>
export const decline = () => <Button style={{ background: "#FFF", color: "#F26522", marginTop: 10, fontSize: "11px", fontWeight: 700, border: "0.1px solid #F26522", borderRadius: "5px", padding: "5px 6px", textAlign: "center", transition: "0.5s", cursor: "pointer", }}>Decline</Button>
export const punchOut = () => <Button variant="contained" style={{ background: "#F26522", color: "#FFF", border: "1px solid #F26522", padding: "4px 50px", borderRadius: "5px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Punch Out</Button>