import { useEffect } from "react";
import { getUniversityWebsite } from "../api/UniversityWebsite";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

export const UniversityWebsiteLink = ({ name }) => {
    const [websiteInfo, setWebsiteInfo] = useState({ domain: "-", website: "-" });
    useEffect(() => {
        getUniversityWebsite(name).then((link) => {
            if (link?.[0] && link[0].web_pages && link[0].domains) {
                setWebsiteInfo({ domain: link[0].domains, website: link[0].web_pages });
            }
        })
    }, [name])
    return (
        <>
            {websiteInfo.domain === "-" ? "-" : (
                <a href={websiteInfo.website} target="_blank">
                    <Text fontSize="sm" textColor="blue.500" fontWeight="bold" whiteSpace="normal">
                        {websiteInfo.domain}
                    </Text>
                </a>
            )
            }
        </>
    );
};