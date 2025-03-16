// %%
const fetchGitHubUser = async () => {
  const url = "https://api.github.com/users/cblte";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const data = await fetchGitHubUser();
// prettier display of the data
const formattedData = {
  name: data.name,
  bio: data.bio,
  location: data.location,
  blog: data.blog,
  twitter: data.twitter_username,
  followers: data.followers,
  following: data.following,
  public_repos: data.public_repos,
};
console.table(formattedData);

// Alternative: Pretty JSON output
// console.log(JSON.stringify(data, null, 2));
// %%
try {
  const url = "https://api.github.com/users/cblte";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}

// %%
const url = `https://api.github.com/users/cblte`;
const response = await fetch(url);

//print a specific header value to the console
console.log("Status:", response.status);
console.log("Content-Type:", response.headers.get("Content-Type"));

//print all header values to the console
for (const [key, value] of response.headers.entries()) {
  console.log(`${key}: ${value}`);
}

// %%
const options = {
  headers: {
    "Content-type": "application/json",
  },
};

try {
  const url = `https://api.github.com/users/mrusme`;
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error("Request failed", err);
}
