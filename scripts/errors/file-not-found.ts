export class FileNotFoundError extends Error {
  constructor(path: string) {
    super(`File not found at path: ${path}.`);

    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, FileNotFoundError.prototype);
  }
}
