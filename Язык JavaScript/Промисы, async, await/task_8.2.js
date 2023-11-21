// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}
  
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while (true) {
        try {
            let name = prompt("Введите логин?", "iliakan");
            let user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch(error) {
            if (error instanceof HttpError && error.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
            throw err;
            }
        }
    }
}
  
demoGithubUser();