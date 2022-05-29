import { render, screen, waitFor } from '@testing-library/react';
import Client from './../components/Client';

describe("Component: Client", () => {
    it("displays returned client info on successful fetch", async () => {
      render(<Client />);
      const element = screen.getByTitle("ifu");
      await waitFor(() => {
        expect(element).toHaveValue("100");
      });
    });
  });
