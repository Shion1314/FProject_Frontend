import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../api/University";
import { setGPA, setMajor, setSat_score, setSearchResults, setTuition_in, setTuition_out } from "../store";
import { Button, FormLabel, Input } from "@chakra-ui/react";

export const FilterSearch = () => {
    const dispatch = useDispatch();

    const sat_score = useSelector((state) => state.university.sat_score);
    const AVG_GPA = useSelector((state) => state.university.GPA_score);
    const tution_in = useSelector((state) => state.university.tuition_instate_full);
    const tution_out = useSelector((state) => state.university.tuition_outstate_full);
    const major = useSelector((state) => state.university.popular_major);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const autoFillElement = document.getElementById("autoFill");
        if (autoFillElement) {
            autoFillElement.style.display = "none";
        }
        const searchParameters2 = {
            avg_sat: sat_score,
            gpa_avg: AVG_GPA,
            tuition_instate_full: tution_in,
            tuition_outstate_full: tution_out,
            popular_major: major,
        };

        getInfo(searchParameters2)
            .then((data) => {
                dispatch(setSearchResults(Array.isArray(data) ? data : [data]));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <FormLabel>
                SAT Score:
            </FormLabel>
            <Input
                type="number"
                name="avg_sat"
                value={sat_score}
                onChange={(SAT) => dispatch(setSat_score(SAT.target.value))}
            />

            <FormLabel>
                GPA Score:
            </FormLabel>
            <Input
                type="number"
                name="GPA"
                value={AVG_GPA}
                onChange={(GPA) => dispatch(setGPA(GPA.target.value))}
            />

            <FormLabel>
                Expected tution in state:
            </FormLabel>
            <Input
                type="number"
                name="tution_in"
                value={tution_in}
                onChange={(tution_) => dispatch(setTuition_in(tution_.target.value))}
            />
            <FormLabel>
                Expected tution out state:
            </FormLabel>
            <Input
                type="number"
                name="tution_in"
                value={tution_out}
                onChange={(tution_) => dispatch(setTuition_out(tution_.target.value))}
            />

            <FormLabel>
                Major:
            </FormLabel>
            <Input
                type="text"
                name="major"
                value={major}
                onChange={(major) => dispatch(setMajor(major.target.value))}
            />
            <Button type="submit" colorScheme="purple">Search</Button>
        </form>
    );
};