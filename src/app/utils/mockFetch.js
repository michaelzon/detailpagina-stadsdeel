// I used regular js here because I had some difficulties with typing behaviour involving promise 
export function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data)
      })
    );
  }
  