import { render, screen, waitFor } from '@testing-library/react';
import Client from './../components/Client';
import { mswServer } from './api-mocks/msw-server';
import { clientHandlerException } from './api-mocks/handlers';
import { debug } from 'console';

describe("Component: Client", () => {
    it("displays returned client info on successful fetch", async () => {
      render(<Client />);
      const element = screen.getByLabelText("IFU");
      await waitFor(() => {
        expect(element).toHaveValue("100");
      });
    });
  });
