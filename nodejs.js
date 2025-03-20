const url = "https://api.github.com/users/denoland";

async function fetchGitHubUserInfo() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("HTTP-Error: " + response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchGitHubUserInfo();
