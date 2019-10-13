import { gql } from "apollo-boost";

export const hospitalFragment = gql`
  fragment hospital on Hospital {
    id
    name
    location
    coverphoto
    logo
    doctors
    specialties
    description
  }
`;

export const userFragment = gql`
  fragment user on User {
    id
    firstName
    lastName
    email
    role
    password
    hospital
    pending
    avatar
  }
`

export const HOSPITAL_QUERY = gql`
  {
    hospitals {
      ...hospital
    }
  }
  ${hospitalFragment}
`;

export const USER_QUERY = gql`
  query getSingleUser($id: ID!) {
    user(id: $id) {
      ...user
    }
  }
  ${userFragment}
`


export const SINGLE_HOSPITAL = gql`
  query getHospital($id: ID!) {
    hospital(id: $id) {
      ...hospital
    }
  }
  ${hospitalFragment}
`;

export const HOSPITAL_USERS = gql`
  query getHospitalUsers($id: ID!) {
    getHospitalUsers(id: $id) {
      ...user
    }
  }
  ${userFragment}
`;

