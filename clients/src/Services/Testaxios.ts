import axios from 'axios';

const API_URL : string = "http://localhost:4000/";

type User = {
  username: string;
  password: string;
};

type GetUsersResponse = {
  data: User;
};

async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      API_URL + "register",
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getUsers();
