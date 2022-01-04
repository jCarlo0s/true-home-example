import AvailabilityBox from "../../components/AvailabilityBox";
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe("AvailabilityBox Component Tests", () => {
    it("should render", () => {
        render(<AvailabilityBox handleReservation={() => {}} data={{}} />)
        expect(screen.getByText("selecciona la cantidad de pasajeros")).toBeInTheDocument();
    })

    it("should render the price", () => {
        const data = {
            price: 5000
        }
        render(<AvailabilityBox handleReservation={() => {}} data={data} />)
        expect(screen.getByText("5000", { exact: false })).toBeInTheDocument();
    })
})