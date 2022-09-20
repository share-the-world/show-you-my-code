function Emiter() {
  const map = {};

  const addListener = (namespace, fn) => {
    if (!map[namespace]) {
      map[namespace] = [];
    }
    map[namespace].push(fn);
    return () => {
      removeListener(namespace, fn);
    };
  };

  const emit = (namespace, ...args) => {
    if (map[namespace]) {
      map[namespace].forEach((element) => {
        element(...args);
      });
    }
  };
  const removeListener = (namespace, fn) => {
    if (map[namespace]) {
      map[namespace].map((v) => v !== fn);
    }
  };

  return { addListener, emit, removeListener };
}

// node javascript/src/interview/06-subscribe/publish-subscribe-namespace.js

const emit = Emiter();

emit.addListener("notice", (...args) => {
  console.log("notice", ...args);
});

emit.addListener("page", (...args) => {
  console.log("page", ...args);
});

for (let index = 0; index < 5; index++) {
  emit.emit("notice", index);
}
